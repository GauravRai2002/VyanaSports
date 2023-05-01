import React from 'react'
import './Snooker.css'
function Snooker() {

    var matches = [
        {
            day: 'SUN, APR 30 2023',
            group: 'T1',
            team1: 'Bengal Rowing Club',
            team2: 'CC & FC',
            time : '5:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'Calcutta Club',
            time : '5:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T1',
            team1: 'Calcutta Swimming Club',
            team2: 'Royal Calcutta Golf Club',
            time : '7:30 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T2',
            team1: 'The Saturday Club',
            team2: 'Calcutta Punjab Club',
            time : '7:30 PM'
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
                        <td>{match.group}</td>
                        <td>{match.time}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Snooker