const getWeekDay = (index) => weekDays[Number(index)];

const getMonth = (index) => months[Number(index)];

const buildDateFormat = (date) => `${getWeekDay(date.format('d'))},
    ${date.format('D')} de ${getMonth(date.format('M') - 1)}
    de ${date.format('YYYY')}`;

const Header = ({ initialDate, finalDate }) => {
    return (
        <div className="header">
            <h1>Reserva de hoteles</h1>
            <p>Desde el {buildDateFormat(initialDate)} {finalDate ? `hasta el ${buildDateFormat(finalDate)}` : ''}</p>
        </div>
    )
}