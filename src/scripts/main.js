AOS.init();

const dataDoEvento = new Date ("Dec 12, 2024 19:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorTimer = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    

    const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`

},1000);