// ResumePDF.tsx
import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#e0e2e5ff",
        color: "white",
        padding: 30,
        fontSize: 12,
        fontFamily: "Helvetica",
    },
    section: {
        marginBottom: 12,
        paddingBottom: 6,
        borderBottom: "1pt solid #444",
    },
    heading: {
        fontSize: 18,
        marginBottom: 4,
        color: "#18161aff",
        textAlign: "center",
    },
    text: {
        marginBottom: 4,
        color: "#333",
    },
    link: {
        color: "#63b3ed",
        textDecoration: "none",
    },
});

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.section}>
                <Text style={styles.heading}>Kiran Bendkoli</Text>
                <Text style={styles.text}>Frontend Developer · Space Enthusiast</Text>
                <Link style={styles.link} src="mailto:kiranbendkoli24@gmail.com">
                    kiranbendkoli24@gmail.com
                </Link>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.heading}>Experience</Text>
                <Text style={styles.text}>
                    - Frontend Developer at XYZ Corp (2022–Present)
                </Text>
                <Text style={styles.text}>- Built React apps, SSR, and animations</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.heading}>Skills</Text>
                <Text style={styles.text}>
                    React, Next.js, Tailwind, Three.js, Node.js
                </Text>
            </View>

            {/* Footer */}
            <View>
                <Text style={styles.text}>
                    © {new Date().getFullYear()} Kiran Bendkoli · Generated with React PDF
                </Text>
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
