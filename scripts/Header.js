const diasSemana = 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_');

const meses = 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_');

const getDiaSemana = (index) => diasSemana[index];

const getMes = (index) => meses[index];

const buildDateFormat = (date) => `${getDiaSemana(Number(date.format('d')))},
    ${date.format('D')} de ${getMes(Number(date.format('M')) - 1)}
    de ${date.format('YYYY')}`;

const Header = (props) => {
    const { initialDate, finalDate } = props
    return (
        <div className="header">
            <h1>Reserva de hoteles</h1>
            <p>Desde el {buildDateFormat(initialDate)} hasta el {buildDateFormat(finalDate)}</p>
        </div>
    )
}