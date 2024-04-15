import './BlockMaker.css'

export default function BlockMaker(i) {
    return (
        <div className='block'>
            <img src={i.i} />
            <h1>Some title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat laborum inventore exercitationem quod. Consectetur?</p>
            <button>Читать дальше</button>
        </div>
    )
}