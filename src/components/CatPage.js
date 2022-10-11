import { useState, useEffect } from 'react'
//rafce
import { useParams, useNavigate } from 'react-router-dom';
import Split from 'react-split';

const CatPage = ({ cats }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [thisCat, setThisCat] = useState([])
    const [catFact, setCatFact] = useState([])
    const [his, setHis] = useState(true)
    const randomFactNumber = Math.floor(Math.random() * 241)

    let gender = 'his'
    his ? gender = 'his' : gender = 'her'

    const changeGender = () => {
        setHis(!his)
    }

    useEffect(() => {
        fetch('https://catfact.ninja/breeds?limit=100')
            .then(response => response.json())
            .then(info => { setThisCat(info.data[id]) });
    }, [id])

    const newCatFact = () => {
        fetch('https://catfact.ninja/facts?limit=241&max_length=140')
            .then(res => res.json())
            .then(info => { setCatFact(info.data[randomFactNumber]) })
    }

    useEffect(() => {
        newCatFact()
    }, [id])


    return (
        <div>
            <Split
                sizes={[50, 50]}
                direction="horizontal"
                style={{ 'display': 'flex' }}
            >
                <div
                    onClick={() => navigate('/My-Cats')}
                    className='bg-green br4 pa3 mt4 mb3 ml3 mr2 shadow-5 pointer'
                >
                    <img alt='cats' src={`https://robohash.org/${id}?set=set4`} width='200' height='200' />
                </div>

                <div className='f7 bg-orange purple tc catInfo shadow-5 pointer'
                    onClick={changeGender}
                >
                    <h1 >About {cats[id].name.substring(0, 14)}</h1>
                    <h2>
                        The breed of {cats[id].name.substring(0, 14)} is {thisCat.breed}, {gender} country is {thisCat.country}
                        and and {gender} oringin is {thisCat.origin};  {gender} coat is {thisCat.coat} with pattern of {thisCat.pattern}.
                    </h2>
                </div>
            </Split>
            <div className='f7 bg-blue yellow tc catInfo grow ma5 shadow-5 pointer'
                onClick={newCatFact}
            >
                <h1>Fun Fact about Cats</h1>
                <h2>
                    Random Cat Fact: {catFact.fact}
                </h2>
            </div>
        </div>
    )
}

export default CatPage