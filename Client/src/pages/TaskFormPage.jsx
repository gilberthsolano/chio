import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success('Tarea Actualizada', {
        position: 'bottom-right',
        style: {
          backgroundColor: '#28a745', // Color verde para el mensaje de éxito
          color: '#fff',
        },
      });
    } else {
      await createTask(data);
      toast.success('Tarea creada', {
        position: 'bottom-right',
        style: {
          backgroundColor: '#007bff', // Azul llamativo para la creación
          color: '#fff',
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue('title', data.title);
        setValue('description', data.description);
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <form onSubmit={onSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Title"
              {...register('title', { required: true })}
              style={{ ...styles.input, ...styles.textInput }}
            />
            {errors.title && <span style={styles.errorText}>Title is required</span>}
          </div>
          
          <div style={styles.inputContainer}>
            <textarea
              rows="3"
              placeholder="Description"
              {...register('description', { required: true })}
              style={{ ...styles.input, ...styles.textArea }}
            ></textarea>
            {errors.description && <span style={styles.errorText}>Description is required</span>}
          </div>
          
          <button style={{ ...styles.button, ...styles.saveButton }}>
            Save
          </button>
        </form>

        {params.id && (
          <button 
            style={{ ...styles.button, ...styles.deleteButton }}
            onClick={async () => {
              const accepted = window.confirm('Are you sure?');
              if (accepted) {
                await deleteTask(params.id);
                toast.success('Tarea eliminada', {
                  position: 'bottom-right',
                  style: {
                    backgroundColor: '#ffc107', // Amarillo llamativo para la eliminación
                    color: '#000',
                  },
                });
                navigate('/tasks');
              }
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

// Estilos en línea
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212', // Fondo oscuro
  },
  formContainer: {
    backgroundColor: '#1e1e1e', // Fondo más claro para el contenedor
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '400px',
    textAlign: 'center',
    color: '#fff', // Texto blanco
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444', // Borde gris oscuro
    fontSize: '16px',
    width: '100%',
    color: '#fff', // Texto blanco
    backgroundColor: '#2c2c2c', // Fondo de input oscuro
  },
  textInput: {},
  textArea: {
    resize: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  saveButton: {
    backgroundColor: '#28a745', // Botón verde
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Botón rojo
    color: '#fff',
    marginTop: '15px',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
  },
};
