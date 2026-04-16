function TaskItem({ taskName, completed, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={onToggle} 
        style={{ cursor: 'pointer' }}
      />
      <span style={{ 
        marginLeft: '8px', 
        textDecoration: completed ? 'line-through' : 'none' 
      }}>
        {taskName}
      </span>
    </div>
  );
}
export default TaskItem;