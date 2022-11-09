import jsPDF from "jspdf";
import 'jspdf-autotable';

export const generateReport = (date) => {
    const doc = new jsPDF()
    doc.text("Reporte de Ingreso e Egreso del Empleo", 30, 10)
    doc.autoTable({
        theme: "grid",
        margin: { top: 20 },
        columns: [
            { header: 'Nombre', dataKey: 'nombre' },
            { header: 'Apellido', dataKey: 'apellido' },
            { header: 'dni', dataKey: 'dni' },
            { header: 'Estado', dataKey: 'estado' },
            { header: 'Ingreso', dataKey: 'ingreso' },
            { header: 'Egreso', dataKey: 'egreso' },
            { header: "Horas+", dataKey: "extra" }
        ],
        body: date.map(item => {
            const { ingreso, egreso } = item;
            const ingreso_date = new Date(ingreso)
            const egreso_date = new Date(egreso)
            item.nombre = item.empleado.nombre
            item.apellido = item.empleado.apellido
            item.dni = item.empleado.dni
            item.estado = item.estado ? "Presente" : "Ausente"
            item.ingreso = egreso_date.getMinutes() < 10 ? `${egreso_date.getHours()}:${egreso_date.getMinutes()}0:${egreso_date.getSeconds()}   (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})` : `${egreso_date.getHours()}:${egreso_date.getMinutes()}:${egreso_date.getSeconds()}   (${egreso_date.getFullYear()}/${egreso_date.getMonth() + 1}/${egreso_date.getDate()})`
            item.egreso = ingreso_date.getMinutes() < 10 ? ` ${ingreso_date.getHours()}:${ingreso_date.getMinutes()}0:${ingreso_date.getSeconds()}  (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})` : `${ingreso_date.getHours()}:${ingreso_date.getMinutes()}:${ingreso_date.getSeconds()}   (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})`
            return item
        }),
    })
    doc.save()
}
