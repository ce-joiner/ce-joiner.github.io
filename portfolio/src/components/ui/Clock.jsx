import { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        // Cleanup interval on unmount
        return () => clearInterval(timer)
    }, [])

    // Format time for New Orleans (Central Time)
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            timeZone: 'America/Chicago',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })
    }

    return (
        <div className="text-sm tracking-wide">
            <span className="text-gray-600">new orleans</span>
            <span className="ml-2 text-gray-600">{formatTime(time)}</span>
        </div>
    )
}

export default Clock 