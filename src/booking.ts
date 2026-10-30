export type BookingRequest = Record<string, FormDataEntryValue>;
// Replace this adapter with the salon's approved endpoint. Never report success locally.
export async function requestAppointment(_request: BookingRequest):Promise<{sent:boolean;message:string}> {
 return {sent:false,message:'Online appointment requests are not open yet. Your details have not been sent. Please check back when our contact details are available.'};
}
export function localDate() { const now=new Date(); return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }

