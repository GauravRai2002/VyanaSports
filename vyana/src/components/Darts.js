import React from 'react'
import './Darts.css'

function Darts() {
    var matches = [
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'CC & FC',
            team2: 'Hindustan Club',
            time : '6:00 PM',
            live : false,
            winner : ' CC & FC'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'Tollygunge Club',
            team2: 'Calcutta Punjab Club',
            time : '6:00 PM',
            live : false,
            winner : ' CPC'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'Tollygunge Club',
            team2: 'CC & FC',
            time : '8:00 PM',
            live : false,
            winner : ' TOLLY'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'Hindustan Club ',
            team2: 'Calcutta Punjab Club',
            time : '8:00 PM',
            live : false,
            winner : ' CPC'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T1',
            team1: 'Bengal Rowing Club',
            team2: 'Calcutta Club',
            time : '6:00 PM',
            live : false,
            winner : ' BRC '
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T2',
            team1: 'Dalhousie Institute',
            team2: 'Calcutta Swimming Club',
            time : '6:00 PM',
            live : false,
            winner : ' DI'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T1',
            team1: 'The Saturday Club',
            team2: 'Clacutta Club',
            time : '8:00 PM',
            live : false,
            winner : ' SATC'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T2',
            team1: 'Bengal Rowing Club',
            team2: 'Calcutta Swimming Club',
            time : '8:00 PM',
            live : false,
            winner : ' BRC'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'T2',
            team1: 'CC & FC',
            team2: 'Calcutta Punjab Club',
            time : '6:00 PM',
            live : false,
            winner : ' CCFC'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'T2',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Tollygunge Club',
            time : '6:00 PM',
            live : false,
            winner : ' RCGC'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'T2',
            team1: 'The Saturday Club ',
            team2: 'Calcuttla Swimming Club',
            time : '8:00 PM',
            live : false,
            winner : ' SATC'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'T2',
            team1: 'Dalhousie intutute ',
            team2: 'Calcuttla Club',
            time : '8:00 PM',
            live : false,
            winner : ' DI'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'T2',
            team1: 'CC & FC ',
            team2: 'Royal Calcuttla Golf Club',
            time : '6:00 PM',
            live : false,
            winner : ' CCFC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'T2',
            team1: 'Tollygunge Club ',
            team2: 'Hindustan Club ',
            time : '6:00 PM',
            live : false,
            winner : ' TOLLY'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'T2',
            team1: 'Calcutta Punjab Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '8:00 PM',
            live : false,
            winner : ' RCGC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'T2',
            team1: 'Bengal Rowing Club ',
            team2: 'Dalhousie Institute ',
            time : '8:00 PM',
            live : false,
            winner : ' BRC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'T2',
            team1: 'The Saturday Club ',
            team2: 'Bengal Rowing Club ',
            time : '6:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'T2',
            team1: 'Calcutta Club ',
            team2: 'Calcutta Swimming Club ',
            time : '6:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'T2',
            team1: 'Hindustan Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '8:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'T2',
            team1: 'The Saturday Club ',
            team2: 'Dalhousie Institute ',
            time : '8:00 PM',
            live : false,
            winner : ' TBD'
        },
    ]
  return (
    <>
         <table className='table-games'>
            {matches.map((match) => (
                <>
                    <tr className='match-heading'>
                        <th>{match.day}</th>
                    </tr>
                    <tr className='match-data'>
                        <td><strong>{match.team1}</strong> Vs <strong>{match.team2}</strong></td>
                        {/* <td>{match.group}</td> */}
                        <td>{match.time}</td>
                        <td> Winner :{match.winner}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Darts