import React from 'react'

export default function Dropdown({cityPluvio, setGraphic }) {
    const execut = (index) => {
        switch (index) {
            case 0:
                setGraphic(cityPluvio.rainIntensityGumbel());
                break;
            case 1:
                setGraphic(cityPluvio.rainIntensity());
                break;
            case 2:
                setGraphic(cityPluvio.IDF_Equation());
                break;
            default:
                break;
        }
    }
    return (
        <div style = {{marginTop:"40px"}}>
            <select name="graphics" id="graphics" style = {{with: '150px', height:'30px', fontSize:"1.2rem"}} onChange={(e) => execut(e.target.options.selectedIndex)} >
            <option value="Gumbel" autoFocus >Intensidade de chuva (Gumbel)</option>
            <option value="chuva máxima" >Intensidade de chuva máxima</option>
            <option value="Equação IDF">Intensidade de chuva pela equação IDF</option>
            </select>
        </div>
    )
}
