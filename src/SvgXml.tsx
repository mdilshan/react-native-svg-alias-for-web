import React from "react";

export const SvgXml: React.FC<{ xml: string, width?: number, height?: number }> = ({
    xml,
    width,
    height
}) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }} dangerouslySetInnerHTML={{
        __html: xml
    }}></div>
}