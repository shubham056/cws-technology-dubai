import React from 'react'

const Preloader = () => {
    return (
        <>
            {/* <div className="preloader-area">
                <div className="spinner">
                    <div className="inner flipper">
                    
                            <div className="front">
                                <img src="/images/logo.png" alt />
                            </div>
                            <div className="back">
                                <img src="/images/logo.png" alt />
                            </div>
                    </div>
                </div>
            </div> */}

            <div className="preloader-area">
                <div className="flipper">
                    <div className="front">
                        <img src="/images/logo.png" alt />
                    </div>
                    <div className="back">
                        <img src="/images/logo.png" alt />
                    </div>
                </div>
            </div>


            {/* Preloader Style */}
            <style jsx>{`
                   .preloader-area {
                    position: fixed;
                    top: 0;
                    background-color: #153f7e;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 99999;
                    text-align: center;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    height:100vh;
                    width:100vw;
                    padding:0;
                    margin:0;
                }
                  .loading-contents {
                    perspective: 200px;
                  }
                  
                  .flipper {
                    transition: all 0.6s;
                    animation: flip 4s infinite;
                    transform-style: preserve-3d;
                  }
                  
                  .flipper, .front, .back {
                    width: 150px;
                    height: 70px;
                  }
                  .front, .back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    backface-visibility: hidden;
                  }
                  
                  .front {
                    transform: rotateY(0);
                  
                  }
                  
                  .back {
                    transform: rotateY(180deg);
                  }
                  
                  @keyframes flip {
                    25% {
                      transform: rotateY(180deg);
                    }
                  
                    50% {
                      transform: rotateZ(180deg);
                    }
                    
                    74.999% {
                      transform: rotateX(179deg);
                    }
                    
                    75% {
                      transform: rotateX(180deg);
                    }
                  }
            `}</style>
        </>
    )
}

export default Preloader;
