import Spisok from '../Info-zagalivak-sita/SpisokSatridnik'
const SpisokLudei = ({data,onDelete,vallue, onToggleProp})=>{
    const elemets = data.map(item =>{
        const {id, ...itemProps} = item;
        return(
            <Spisok
                key={id}
                {...itemProps}
                vallue={(e)=> vallue(e.target.value, id)}
                onDelete = {() => onDelete(id)}
                onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        );
    });
    return(
        <div className="conteiner">
            {elemets}
        </div>
    )
}
export default SpisokLudei;