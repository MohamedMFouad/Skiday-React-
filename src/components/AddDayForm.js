import {PropTypes, Component} from 'react'

const autoResort =[
    "Cario new cairo",
    "Dusit",
    "More fun Resort",
    "Alex Bix",
    "Norman world",
    "World Land"
]

class Autocomplete extends Component {
    get value(){
            return this.refs.inputResort.value
    }
   set value(inputValue){
            this.refs.inputResort.value =inputValue
   }
    render(){
        return(
             <div>
                 <input ref="inputResort" type="text" list="autoResort" /> 
                 <datalist id="autoResort" >
                     {this.props.options.map((opt, i)=><option key={i}>{opt}</option>)}   
                 </datalist>
            </div>
        )
    }


}

export const AddDayForm = ({resort, date, powder, backcountry, onNewDay})=>{
    let  _date , _resort , _powder ,_backcountry
    const submit=(e)=>{
        e.preventDefault()
        
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })
        
       _resort.value =''
       _date.value=''
       _powder.checked=false
       _backcountry.checked=false
    }

     
      
     return(
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort</label>
            <Autocomplete options={autoResort}
                    ref={input => _resort = input}/> 

            <label htmlFor="date">Date</label>
            <input id="date"
                    type="date"
                    required
                    defaultValue={date} 
                    ref={input => _date = input}/> 

            <div>
            <input id="powder" 
                    type="checkbox"  
                    defaultChecked={powder}
                    ref={input => _powder = input}/>
            <label htmlFor="powder">the Powder</label>
            </div>
            <div>
            <input id="backcountry"
                        type="checkbox"
                        defaultChecked={backcountry}  
                        ref={input => _backcountry = input}/> 
            <label htmlFor="backcountry">Backcountry</label>

            </div>
            <button>Add Day</button>

        </form>
     )

}




AddDayForm.defaultProps = {
    resort: "Cairo",
    date: "2018-02-15",
    powder:true,
    backcountry:false
}


AddDayForm.propTypes={
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}