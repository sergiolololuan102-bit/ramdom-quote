const quote = document.getElementById('quote');
const author = document.getElementById('author');

const quotes = [
    { quote: "Kesuksesan bukan tentang seberapa cepat kamu sampai, tetapi seberapa konsisten kamu melangkah.", author: "Jim Stovall" },
    { quote: "Belajar hari ini adalah investasi terbaik untuk masa depanmu.", author: "Les Brown" },
    { quote: "Jangan menunggu waktu yang sempurna untuk mulai; mulailah sekarang dan sempurnakan prosesnya.", author: "Steve Jobs" },
    { quote: "Kebiasaan baik akan membawa hasil yang baik, meski dimulai dari langkah kecil.", author: "James Clear" },
    { quote: "Keberanian bukan berarti tidak takut, tetapi tetap maju meski takut.", author: "John F. Kennedy" },
    { quote: "Hidup berarti terus berkembang, belajar, dan menjadi lebih baik setiap hari.", author: "Tony Robbins" },
    { quote: "Sukses bukan hanya soal bakat, tetapi juga tentang disiplin dan usaha.", author: "Brian Tracy" },
    { quote: "Ketika kamu berhenti belajar, kamu mulai berhenti berkembang.", author: "Albert Einstein" }
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quote.textContent = selectedQuote.quote;
    author.textContent = selectedQuote.author;
}

