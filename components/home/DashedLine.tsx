import React from 'react'

const DashedLine = () => {
    return (
        <div className="-mt-px h-[1px] w-full text-gray-200" role="separator" style={{ background: "linear-gradient(90deg, transparent 5px, currentcolor 5px, currentcolor 11px, transparent 11px) 50% 50% / 11px repeat-x" }}></div>
    )
}

export default DashedLine