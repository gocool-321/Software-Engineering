import React from "react";

export default function Page({ children }) {
    const styles = {
        height: "100vh",
        width: "100vw"
    }
    return <div style={styles}>
        {children}
    </div>
}