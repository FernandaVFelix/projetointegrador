const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../')));

const data = [
  {
    "data_iniSE": 1717286400000,
    "SE": 202423,
    "casos_est": 57,
    "casos_est_min": 3,
    "casos_est_max": 598,
    "casos": 0,
    "p_rt1": 4.7e-9,
    "p_inc100k": 21.3809070587,
    "Localidade_id": 0,
    "nivel": 1,
    "id": 352050920242319900,
    "versao_modelo": "2024-06-10",
    "tweet": null,
    "Rt": 0.4213312268,
    "pop": 266593,
    "tempmin": 13.22635,
    "umidmax": 82.6953,
    "receptivo": 0,
    "transmissao": 0,
    "nivel_inc": 2,
    "umidmed": 68.56465,
    "umidmin": 45.99925,
    "tempmed": 18.1142,
    "tempmax": 25.39215,
    "casprov": 0,
    "casprov_est": null,
    "casprov_est_min": null,
    "casprov_est_max": null,
    "casconf": null,
    "notif_accum_year": 277
  },
  {
    "data_iniSE": 1716681600000,
    "SE": 202422,
    "casos_est": 59,
    "casos_est_min": 6,
    "casos_est_max": 492,
    "casos": 1,
    "p_rt1": 0,
    "p_inc100k": 22.1311130524,
    "Localidade_id": 0,
    "nivel": 4,
    "id": 352050920242219900,
    "versao_modelo": "2024-06-10",
    "tweet": null,
    "Rt": 0.290145129,
    "pop": 266593,
    "tempmin": 12.632644,
    "umidmax": 93.1353128571,
    "receptivo": 0,
    "transmissao": 0,
    "nivel_inc": 2,
    "umidmed": 80.610192,
    "umidmin": 59.6973334286,
    "tempmed": 15.8507308571,
    "tempmax": 20.3913281429,
    "casprov": 1,
    "casprov_est": null,
    "casprov_est_min": null,
    "casprov_est_max": null,
    "casconf": null,
    "notif_accum_year": 277
  },
  {
    "data_iniSE": 1716076800000,
    "SE": 202421,
    "casos_est": 87.5,
    "casos_est_min": 43,
    "casos_est_max": 360,
    "casos": 37,
    "p_rt1": 1.110223025e-16,
    "p_inc100k": 32.8215675354,
    "Localidade_id": 0,
    "nivel": 4,
    "id": 352050920242119900,
    "versao_modelo": "2024-06-10",
    "tweet": null,
    "Rt": 0.3793803453,
    "pop": 266593,
    "tempmin": 17.3433628571,
    "umidmax": 89.0533441429,
    "receptivo": 0,
    "transmissao": 0,
    "nivel_inc": 2,
    "umidmed": 70.6258657143,
    "umidmin": 47.3877594286,
    "tempmed": 21.3273637143,
    "tempmax": 26.9788131429,
    "casprov": 37,
    "casprov_est": null,
    "casprov_est_min": null,
    "casprov_est_max": null,
    "casconf": null,
    "notif_accum_year": 277
  },
  {
    "data_iniSE": 1715472000000,
    "SE": 202420,
    "casos_est": 294,
    "casos_est_min": 246,
    "casos_est_max": 501,
    "casos": 239,
    "p_rt1": 0.6722787619,
    "p_inc100k": 110.2804641724,
    "Localidade_id": 0,
    "nivel": 4,
    "id": 352050920242019900,
    "versao_modelo": "2024-06-10",
    "tweet": null,
    "Rt": 1.0378170013,
    "pop": 266593,
    "tempmin": 17.4235684286,
    "umidmax": 83.2251842857,
    "receptivo": 0,
    "transmissao": 0,
    "nivel_inc": 2,
    "umidmed": 63.8356781429,
    "umidmin": 40.421608,
    "tempmed": 22.3518988571,
    "tempmax": 28.7261331429,
    "casprov": 236,
    "casprov_est": null,
    "casprov_est_min": null,
    "casprov_est_max": null,
    "casconf": null,
    "notif_accum_year": 277
  }
];

// Rota para fornecer os dados JSON
app.get('/api/dados', (req, res) => {
  res.json(data);
});

// Configurar a aplicação para ouvir em uma porta
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
