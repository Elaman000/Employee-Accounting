import './SP-sotrudnik.css'
import {Component} from "react";
class Spisok extends Component{
    constructor(props) {
        super(props);
    }
    value = (e)=>{
        this.props.vallue(e);
    };
    render() {
        const {name, mani,star, onDelete,onToggleProp,incrise } = this.props;
        let className = 'conteiner-spisok';
        if(incrise){
            className += ' incris'
        }
        return(
            <div className={className} id="contein" >
                <div className="name-sotrudnik">{name}</div>
                <div className="mani-sotrudnik">
                    <input className={'inpNumber'}
                           type="number" defaultValue={mani}
                           onChange={this.value}/>
                    <i>
                        <button  type="button"
                                 className="btn-coocie btn-se"
                                 onClick={onToggleProp}
                                 data-toggle='incrise'>
                            <i className="fas fa-cookie">🍪</i>
                        </button>
                        <button type="button"
                                className="btnPechenki">
                            <i className="fas fa-trash"
                               onClick={onDelete}
                            >🗑</i>
                        </button>
                        <i className="fas fa-trash" onClick={onToggleProp}
                           data-toggle='star'
                        >{star ? '💲': '👍'}</i>
                    </i>

                </div>
            </div>
        )
    }





};

export default Spisok;