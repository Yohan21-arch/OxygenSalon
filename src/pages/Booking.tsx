import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services, staff } from '../data';
import { localDate, requestAppointment } from '../booking';
import { serviceSlug } from './Services';
const steps = ['Choose a category', 'Choose a service', 'Staff preference', 'Date & time', 'Your details', 'Review request'];
export default function Booking() {
    const [params] = useSearchParams();
    const initial = services.find(s => s.id === params.get('category'));
    const chosen = initial?.items.find(s => serviceSlug(s.name) === params.get('service'));
    const [step, setStep] = useState(chosen ? 2 : initial ? 1 : 0);
    const [data, setData] = useState({ category: initial?.id ?? '', service: chosen?.name ?? '', staff: '', date: '', time: '', name: '', phone: '', email: '', notes: '', acknowledgement: false });
    const [message, setMessage] = useState('');
    const [busy, setBusy] = useState(false);
    const heading = useRef<HTMLHeadingElement>(null);
    const group = services.find(s => s.id === data.category);
    const update = (key: string, value: string | boolean) => setData(d => ({ ...d, [key]: value }));
    useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [step]);
    return <section className="section page-section booking-page"><div className="two-col"><div><p className="eyebrow">Appointment request</p><h1 tabIndex={-1}>Your next look<br /><em>starts here.</em></h1><p>Online appointment requests are not yet connected.</p><ol className="booking-progress">{steps.map((t, i) => <li key={t} aria-current={step === i ? 'step' : undefined}>0{i + 1} — {t}</li>)}</ol></div><div><h2 ref={heading} tabIndex={-1}>{steps[step]}</h2><form onSubmit={async (e) => { e.preventDefault(); if (step < 5) {
        setMessage('');
        setStep(s => s + 1);
        return;
    } if (data.date < localDate()) {
        setStep(3);
        setMessage('Please choose today or a future date.');
        return;
    } setBusy(true); try {
        await requestAppointment(Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])));
        setMessage('Online appointment requests are not yet connected. Your details have not been sent.');
    }
    catch {
        setMessage('Your request could not be sent.');
    }
    finally {
        setBusy(false);
    } }}><div className="wizard-step" key={step}>
 {step === 0 && <label>Service category<select required value={data.category} onChange={e => setData(d => ({ ...d, category: e.target.value, service: '' }))}><option value="">Choose a category</option>{services.map(s => <option value={s.id} key={s.id}>{s.title}</option>)}</select></label>}
 {step === 1 && <label>Specific service<select required value={data.service} onChange={e => update('service', e.target.value)}><option value="">Choose a service</option>{group?.items.map(s => <option key={s.name}>{s.name}</option>)}</select></label>}
 {step === 2 && <label>Preferred staff member<select value={data.staff} onChange={e => update('staff', e.target.value)}><option value="">No preference</option>{staff.map(s => <option value={s.id} key={s.id}>{s.role} — placeholder profile</option>)}</select></label>}
 {step === 3 && <div className="form-grid"><label>Preferred date<input type="date" required min={localDate()} value={data.date} onChange={e => update('date', e.target.value)}/></label><label>Preferred time<input type="time" required value={data.time} onChange={e => update('time', e.target.value)}/></label><p className="full">Availability and opening hours are not yet supplied. These are preferences only.</p></div>}
 {step === 4 && <div className="form-grid"><label>Name<input autoComplete="name" required minLength={2} value={data.name} onChange={e => update('name', e.target.value)}/></label><label>Phone<input type="tel" autoComplete="tel" required pattern="[+0-9() .-]{7,20}" value={data.phone} onChange={e => update('phone', e.target.value)}/></label><label className="full">Email (optional)<input type="email" autoComplete="email" value={data.email} onChange={e => update('email', e.target.value)}/></label><label className="full">Notes (optional)<textarea maxLength={1500} value={data.notes} onChange={e => update('notes', e.target.value)}/></label><label className="checkbox full"><input type="checkbox" required checked={data.acknowledgement} onChange={e => update('acknowledgement', e.target.checked)}/>I understand Oxygen is a female-only salon.</label></div>}
 {step === 5 && <dl className="review-list">{[['Category', group?.title], ['Service', data.service], ['Staff preference', staff.find(s => s.id === data.staff)?.role ?? 'No preference'], ['Date', data.date], ['Time', data.time], ['Name', data.name], ['Phone', data.phone], ['Email', data.email || 'Not supplied'], ['Notes', data.notes || 'None']].map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
 </div><div className="wizard-actions">{step > 0 && <button type="button" className="text-link" onClick={() => { setMessage(''); setStep(s => s - 1); }}>← Back</button>}<button className="button" disabled={busy}>{step === 5 ? 'Request appointment ↗' : 'Continue →'}</button></div>{message && <p role="status" className="form-status">{message}</p>}</form></div></div></section>;
}
