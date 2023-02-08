import './zaga-class.css'
const InformationSite = ({data})=>{
    let a = 0;
    data.map(item => {
        if (!item.incrise){
            a++
        }
    });
        return(
            <div className="conteiner">
                <h1>Учёт сотрудников компании: {0}</h1>
                <h3>Обшое число сотрудников: {data.length}</h3>
                <h3>Премию получят: {a}</h3>
            </div>

        )
    };

export default InformationSite;