const inputClassName = 'border';
const formClassName = 'flex flex-col gap-2';
const labelClassName = '';
const buttonClassName = 'border-2 bg-amber-200';
const formElementClassName = '';

const bookingFormComponent = () => (
    <form action="/booking" className={formClassName}>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='Environment'>Environment: </label>
            <select className={inputClassName} name='Environment' aria-describedby='Environment name' required={true}>
                <option id='TST1'>TST1</option>
                <option id='TST2'>TST2</option>
                <option id='TST3'>TST3</option>
            </select>
        </div>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='Name'>Name: </label>
            <input className={'border gap-4 '} name='Name' aria-label='Name'
                   aria-describedby='Name of the person booking'
                   type='text'/>
        </div>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='Office'>Office: </label>
            <select className={inputClassName} name='Office'
                    aria-describedby='Office of the person making the booking'>
                <option id='LDN'>LDN</option>
                <option id='VAN'>VAN</option>
                <option id='NYC'>NYC</option>
            </select>
        </div>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='BookingDate'>Booking Date: </label>
            <input className={inputClassName} name='BookingDate' aria-describedby='The date of the booking'
                   type='date'/>
        </div>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='Shareable'>Shareable? </label>
            <input className={inputClassName} name='Shareable' aria-describedby='Is this ennvironment shareable?'
                   type='checkbox'/>
        </div>
        <div className={formElementClassName}>
            <label className={labelClassName} htmlFor='Notes'>Notes: </label>
            <textarea className={inputClassName} name='Notes'
                      aria-describedby='Description of anything that may be important to other people who want to use the environment'
                      cols={30} rows={5}/>
        </div>
        <button type="submit" className={buttonClassName}>Book Environment</button>

    </form>
)

export default bookingFormComponent;