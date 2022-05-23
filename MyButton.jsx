

const MyButton = ({ title })=>{
     /**
     * state pada component react
     * state merupakan penyimpanan data sementara pada react
     * state mempunyai dua komponent, variable dan setter atau dispatcher
     * 
     */

    /**
     * count => sebagai variable penyimpan nilai
     * setCount =>> sebagai setter, atau function yang bisa mengubah nilai varible count
     * default value pada variable count bisa diletakan di parameter function useState()
    */

    let [ count, setCount ] = React.useState( 1 ) 

    const kurang = ()=>{
        setCount( count - 1 )
    }

    const tambah = ()=>{
        setCount( count + 1 )
    }

    return (
        <div style={{display : "flex", gap: "20px"}}>
            <button onClick={kurang}>
                -
            </button>

            <p> { count } </p>

            <button onClick={tambah}>
                +
            </button>

            <button>reset</button>

        </div>
    )
}

