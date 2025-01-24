
import { useState } from "react";

const RegisterComponent = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    trainingAttendance: 0,
    tournamentAverage: 0,
    bestTournamentPosition: "",
    monthlyPayments: 0,
  });

  // Manejar cambios en los campos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    // Si tienes un backend, puedes enviar los datos aquí
    // fetch("URL_DEL_BACKEND", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Registrar Persona - Club Sabana
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo de Nombre Completo */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium">
            Nombre Completo
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Ingrese su nombre completo"
            required
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>

        {/* Campo de Correo */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="correo@ejemplo.com"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Campo de Teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border rounded px-3 py-2"
            placeholder="Ingrese su teléfono"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Asistencia a entrenamientos */}
        <div>
          <label
            htmlFor="trainingAttendance"
            className="block text-sm font-medium"
          >
            Asistencia a Entrenamientos (días)
          </label>
          <input
            id="trainingAttendance"
            name="trainingAttendance"
            type="number"
            min="0"
            className="w-full border rounded px-3 py-2"
            placeholder="0"
            required
            value={formData.trainingAttendance}
            onChange={handleInputChange}
          />
        </div>

        {/* Promedio en torneos */}
        <div>
          <label
            htmlFor="tournamentAverage"
            className="block text-sm font-medium"
          >
            Promedio de Participación en Torneos (%)
          </label>
          <input
            id="tournamentAverage"
            name="tournamentAverage"
            type="number"
            min="0"
            max="100"
            className="w-full border rounded px-3 py-2"
            placeholder="0"
            required
            value={formData.tournamentAverage}
            onChange={handleInputChange}
          />
        </div>

        {/* Mejor puesto en torneos */}
        <div>
          <label
            htmlFor="bestTournamentPosition"
            className="block text-sm font-medium"
          >
            Mejor Puesto en Torneos
          </label>
          <input
            id="bestTournamentPosition"
            name="bestTournamentPosition"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Ej: 1er Lugar"
            required
            value={formData.bestTournamentPosition}
            onChange={handleInputChange}
          />
        </div>

        {/* Pagos Mensuales */}
        <div>
          <label
            htmlFor="monthlyPayments"
            className="block text-sm font-medium"
          >
            Informe de Pagos Mensuales (USD)
          </label>
          <input
            id="monthlyPayments"
            name="monthlyPayments"
            type="number"
            min="0"
            className="w-full border rounded px-3 py-2"
            placeholder="0"
            required
            value={formData.monthlyPayments}
            onChange={handleInputChange}
          />
        </div>

        {/* Botón de Enviar */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;

