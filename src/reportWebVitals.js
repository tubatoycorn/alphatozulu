const reportWebVitals = async (onPerfEntry) => {
    if (typeof onPerfEntry !== "function") return;

    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import("web-vitals");
    const vitals = [getCLS, getFID, getFCP, getLCP, getTTFB];
    vitals.forEach((metric) => metric(onPerfEntry));
};

export default reportWebVitals;
