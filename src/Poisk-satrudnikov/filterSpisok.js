import './poiskcotridnik.css'

const Filter = (props) =>{
    const batn= [
                {name: 'all', label: 'Все сотрудники'},
                {name: 'rise', label: 'На повышение'},
                {name: 'morerThen1000', label: 'З/П болше 1000$'},
            ];

    const element = batn.map(({name, label}) => {
        return(
        <button
        key={name}
        onClick={()=> props.onFilterSposok(name)}>{label}
        </button>
        )
    });
    return(
        <>
            {element}
            </>
    )
};
export default Filter;