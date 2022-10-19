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
        let newId = id - 1;
        if (id > 97) {
            newId = Math.floor(Math.random() * 98)
        }
        fetch('https://catfact.ninja/breeds?limit=100')
            .then(response => response.json())
            .then(info => { setThisCat(info.data[newId]) });
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
                    className='br4 pa3 mt4 mb3 ml3 mr2 shadow-5 pointer'
                >
                    <img alt='cats' src={`https://robohash.org/${id}?set=set4`} width='200' height='200' />
                </div>

                <div className='f7 bg-orange purple tc catInfo shadow-5 pointer'
                    onClick={changeGender}
                >
                    <h3 className='candyFont'>About {cats[id - 1].name.substring(0, 14)}</h3>
                    <h3>
                        The breed of {cats[id - 1].name.substring(0, 14)} is {thisCat.breed}, {gender} country is {thisCat.country}
                        and and {gender} oringin is {thisCat.origin};  {gender} coat is {thisCat.coat} with pattern of {thisCat.pattern}.
                    </h3>
                </div>
            </Split>
            <div className='f7 bg-blue yellow tc catInfo grow ma5 shadow-5 pointer'
                onClick={newCatFact}
            >
                <h3 className='candyFont'>Fun Fact about Cats</h3>
                <h3>
                    Random Cat Fact: {catFact.fact}
                </h3>
            </div>
        </div>
    )
}

export default CatPage