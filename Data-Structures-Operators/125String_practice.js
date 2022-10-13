const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// +号分割
const raw_flights = flights.split('+');
for (const item of raw_flights) {
    const [state, f, t, time] = item.split(';');
    let s1 = state.replaceAll("_", " ");
    const s2 = f.slice(0, 3).toUpperCase();
    const s3 = t.slice(0, 3).toUpperCase();
    const s4 = time.replaceAll(":", "h");

    const str = `${s1.includes('Delayed') ? "🛑 " : ""}${s1} from ${s2} to ${s3} (${s4})`
    console.log(str);
}

