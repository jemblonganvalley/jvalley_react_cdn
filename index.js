
/**
 * react compoenent 
 * React compoent adalah sebuah function, arrow function atau class pada javascript yang mereturn element JSX.
 * 
 * Component di call dengan cara menempatkan nama Compoenent di dalam TAG
 * contohnya bila kita membuat sebuah function bernama App, maka akan dipanggil
 * dengan  <App /> 
 * 
 * Component bisa di panggil di element JSX lainnya, atau di function render ReactDOM
 * 
 * -- syarat membuat component
 * Nama function / class component harus di mulai dengan huruf Capital
 * component bisa mempunyai seuatu yang di sebut Props 
 * 
 * component hanya bisa mereturn 1 parent
 * 
 */


const App = ()=>{
    return (
        <div>
            <h1>Hello saya sedang belajar react</h1>

            <MyButton title="kamu klik : " />

            <MyCard title={"ini card kedua"} content="ini content kedua saya" />

        </div>
    )
}


ReactDOM.render( <App /> , document.getElementById("root") )