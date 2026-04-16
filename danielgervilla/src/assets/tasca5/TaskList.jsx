import React, { useState } from 'react';
import TaskItem from './TaskItem';
function TaskList() {
  const [tasques, setTasques] = useState([
    { taskName: 'fer el llit', completed: false },
    { taskName: 'fumar porret', completed: false }
  ]);
  const toggleTasca = (indexClicado) => {
    const llistaActualitzada = tasques.map((tasca, index) => {
      if (index === indexClicado) {
        return { ...tasca, completed: !tasca.completed };
      }
      return tasca;
    });
    setTasques(llistaActualitzada);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>Llista de Tasques</h2>
      {tasques.map((tasca, index) => (
        <TaskItem 
          key={index} 
          taskName={tasca.taskName} 
          completed={tasca.completed} 
          onToggle={() => toggleTasca(index)} 
        />
      ))}
    </div>
  );
}
export default TaskList;