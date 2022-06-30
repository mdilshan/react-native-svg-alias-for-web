import React from "react";

export const SvgXml: React.FC<{ xml: string, width?: number, height?: number }> = ({
    xml,
    width,
    height
}) => {
    return <span style={{
        width,
        height
    }} dangerouslySetInnerHTML={{
        __html: xml
    }}></span>
}