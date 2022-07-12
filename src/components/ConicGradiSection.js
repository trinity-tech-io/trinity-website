import React from 'react';

const ConicGradiSection = (props) => {
    const { titleAlign='left', title } = props
    const styleVar = [
        {ang0: '180deg', ang1: '50deg', color2: '#B243D9', ang2: '140deg', ang3: '300deg' },
        {ang0: '60deg', ang1: '0deg', color2: '#4376D9', ang2: '150deg', ang3: '218deg' },
        {ang0: '180deg', ang1: '53deg', color2: '#60D96C', ang2: '260deg', ang3: '286deg' },
    ]
    const [styleIndex, setStyleIndex] = React.useState(0)

    React.useEffect(()=>{
        let tempIndex = styleIndex
        setInterval(()=>{
            tempIndex++
            setStyleIndex(tempIndex%3)
        }, 4000) 
    }, [])

    return (
        <section className="section section-lg height-100vh" id="home" style={{backgroundColor: 'black'}}>
            {
                styleVar.map((item, _i)=>(
                    <div
                        key={_i}
                        className="bg-overlay"
                        style={{
                            '--a0': item.ang0,
                            '--a1': item.ang1,
                            '--c2': item.color2,
                            '--a2': item.ang2,
                            '--a3': item.ang3,
                            opacity: styleIndex===_i ? 1 : 0
                        }}
                    />
                ))
            }
            <div className="display-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-white" style={{textAlign: titleAlign}}>
                                <h1 className="home-title">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-nav">
                <a href="#schema" className="nav-link">
                    <div className='icon-scroll'/>
                </a>
            </div>
        </section>
    );
}

export default ConicGradiSection;