"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4000;
app.get('/api', (_req, res) => {
    res.send('Successfully connected to the API server');
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
