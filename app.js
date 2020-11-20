const ctx = document.getElementById("graphic").getContext("2d");
const labels = [];
for (let i = 0; i <= 80; i++) {
    labels.push(i);
}
const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                label:
                    "De 99 crianças que NASCERAM COM VOCÊ quantas estariam vivas na sua idade?",
                backgroundColor: "rgb(70, 120, 70)",
                borderColor: "rgb(255, 99, 132)",
                data: [
                    76.3,
                    76.3,
                    75.3,
                    74.4,
                    73.4,
                    72.4,
                    71.4,
                    70.5,
                    69.5,
                    68.5,
                    67.5,
                    66.5,
                    65.5,
                    64.5,
                    63.6,
                    62.6,
                    61.6,
                    60.7,
                    59.8,
                    58.8,
                    57.9,
                    57.0,
                    56.0,
                    55.1,
                    54.2,
                    53.3,
                    52.4,
                    51.4,
                    50.5,
                    49.6,
                    48.7,
                    47.8,
                    46.8,
                    45.9,
                    45.0,
                    44.1,
                    43.2,
                    42.2,
                    41.3,
                    40.4,
                    39.5,
                    38.6,
                    37.7,
                    36.8,
                    35.9,
                    35.0,
                    34.1,
                    33.3,
                    32.4,
                    31.5,
                    30.7,
                    29.8,
                    29.0,
                    28.2,
                    27.3,
                    26.5,
                    25.7,
                    24.9,
                    24.1,
                    23.3,
                    22.6,
                    21.8,
                    21.0,
                    20.3,
                    19.5,
                    18.8,
                    18.1,
                    17.4,
                    16.7,
                    16.0,
                    15.3,
                    14.7,
                    14.1,
                    13.4,
                    12.8,
                    12.3,
                    11.7,
                    11.2,
                    10.6,
                    10.1,
                    9.6
                ]
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "Na expectativa de vida atual do brasileiro",
            fontSize: 16
        },
        legend: {
            display: true
        },
        scales: {
            yAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Vivos"
                    }
                }
            ],
            xAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Idade"
                    }
                }
            ]
        },
        tooltips: {
            callbacks: {
                label: function (item, data) {
                    let value = Math.round(data.datasets[0].data[item.index]);
                    return `vivos você + ${value - 1}`;
                },
                title: (item, data) => {
                    let title = "";
                    let idade = item[0].label;
                    switch (idade) {
                        case "0":
                            title = "menos de 1 ano";
                            break;
                        case "1":
                            title = "1 ano";
                            break;
                        default:
                            title = `${item[0].label} anos`;
                    }
                    return title;
                }
            }
        }
    }
});
