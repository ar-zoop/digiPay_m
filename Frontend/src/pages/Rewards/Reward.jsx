import React from 'react';
import "./reward.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
// import { FaRankingStar } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { MdRefresh } from "react-icons/md";

const Reward = () => {
    return (
        <div className="rewardContainer">
            <div className="rewardPageHeader">
                <h2>Dashboard</h2>
            </div>

            <div className="rewardWrapper">
                <button style={{ backgroundColor: "white" }}><AiFillStar /> Points</button>
                <button style={{ color: "#87807d", backgroundColor: "#dbdbdb" }}><SlBadge style={{ color: "black" }} /> Achievements</button>
                <button style={{ color: "#87807d", backgroundColor: "#dbdbdb" }}><SlBadge style={{ color: "black" }} /> Ranks</button>
            </div>
            <div className="rewardInfoGraph">
                <div className="rewards" style={{backgroundColor: "#3598db"}}>
                    <div>
                        <MdRefresh size={50} style={{color: "#dbdbdb"}} />
                    </div>
                    <div className="rsecond">

                        <h2 style={{color: "white", marginBottom: "8px"}}>19628</h2>
                        <p style={{color: "#dbdbdb", fontSize: "12px"}}>In Circulation</p>
                    </div>
                </div>
                <div className="rewards" style={{backgroundColor: "#35b75f"}}>
                    <div>
                        <AiFillStar size={50} style={{color: "#dbdbdb"}}/>
                    </div>
                    <div className="rsecond">

                        <h2 style={{color: "white", marginBottom: "8px"}}>3588</h2>
                        <p style={{color: "#dbdbdb", fontSize: "12px"}}>Awarded</p>
                    </div>
                </div>
                <div className="rewards" style={{backgroundColor: "#e14d43"}}>
                    <div>
                        <AiOutlineStar size={50} style={{color: "#dbdbdb"}} />
                    </div>
                    <div className="rsecond">
                        <h2 style={{color: "white", marginBottom: "8px"}}>1260</h2>
                        <p style={{color: "#dbdbdb", fontSize: "12px"}}>Deducted</p>
                    </div>

                </div>
                <div className="rewards" style={{backgroundColor: "#8461b5"}}>
                    <div>
                        <LuRefreshCw size={50} style={{color: "#dbdbdb"}} />
                    </div>
                    <div className="rsecond">

                        <h2 style={{color: "white", marginBottom: "8px"}}>820</h2>
                        <p style={{color: "#dbdbdb", fontSize: "12px"}}>Expanded</p>
                    </div>
                </div>

            </div>

            <div className="tableDetails">
                <table className="points-table">
                    <thead>
                        <tr>
                            <th>Points Type</th>
                            <th>Circulation</th>
                            <th>Awarded</th>
                            <th>Deducted</th>
                            <th>Expanded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{color: "#6b818c"}}>Points</td>
                            <td>400</td>
                            <td>400</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td style={{color: "#6b818c"}}>Coins</td>
                            <td>1979</td>
                            <td>1639</td>
                            <td>10</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td style={{color: "#6b818c"}}>Gems</td>
                            <td>6770</td>
                            <td>510</td>
                            <td>160</td>
                            <td>220</td>
                        </tr>
                        <tr>
                            <td style={{color: "#6b818c"}}>Credits</td>
                            <td>10497</td>
                            <td>1039</td>
                            <td>1110</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>Points Type</td>
                            <td>Circulation</td>
                            <td>Awarded</td>
                            <td>Deducted</td>
                            <td>Expanded</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Reward;