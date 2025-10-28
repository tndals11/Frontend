// ! 사용자로부터 입력받은 할 일을 관리하는 Task Logger

// 1. 할 일 타입 정의 - 인터페이스

interface Task {
  id: number;               // 할 일 고유 번호
  description: string;      // 할 일 내용 
  timestamp: Date;          // 할 일 기록 시간 (생성 시간)
}

// Task 저장소의 구조 - 클래스
// : 할 일에 대한 저장소(배열)와 기능(함수, 메서드) 명시 

class TaskLogger {
  private tasks: Task[] = [];
  
  // 할 일의 ID 생성을 위한 카운터 
  private taskIdCount = 0;

  addTask(description: string): Task {
    const newTask: Task = {
      id: this.taskIdCount++,
      description,
      timestamp: new Date()
    }

    this.tasks.push(newTask);
    this.renderTasks(); // 할 일 목록을 화면에 재랜더링(다시 출력)
    return newTask;
  }

  deleteTask(taskId: number):void {
    // 현재의 tasks 배열을 순회하여 순회되는 요소의 id와 삭제하고자 하는 요소의 id(매개변수값)가 일치하지 않는 요소만 새로운 배열에 담아 tasks에 저장
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.renderTasks();
  }

  private createTaskElement(task: Task) {
    const taskItem = document.createElement('div');

    taskItem.className = 'task-item';

    taskItem.innerHTML = `
      <span>${task.description} - ${task.timestamp.toLocaleString()}</span>
      <button data-task-id=${task.id}>Delete</button>
    `;

    return taskItem;
  }

  private renderTasks() {
    const taskList = document.getElementById('task-list');

    if (taskList) {
      taskList.innerHTML = '';  
      this.tasks.forEach(task => {
        const taskItem = this.createTaskElement(task);
        taskList.appendChild(taskItem);
      });

      this.addDeleteEnventListeners();
    }
  }


  private addDeleteEnventListeners() {
    const deleteButtons = document.querySelectorAll('.task-item-button');

    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const taskId = parseInt((e.target as HTMLButtonElement).dataset.taskId || '0',
          10);

          this.deleteTask(taskId);
      });
    });
  }
}

// ! 프로젝트 실행의 진입점
const init = (): void => {
  //? TaskManger 인스턴스 생성
  const taskManager = new TaskLogger();

  const logTaskButton = document.getElementById('log-task-button');
  const taskModal = document.getElementById('task-modal');
  const closeModalButton = document.querySelector('.close');
  const addTaskButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input') as HTMLInputElement; 

  if (logTaskButton) {
    logTaskButton.addEventListener('click', () => {
      
      if(taskModal) {
        taskModal.style.display = 'block';
        taskInput.focus();
      }
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', ()  => {
      if (taskModal) {
        taskModal.style.display = 'none';
      }
    })
  }


  window.addEventListener('click', (e) => {
    if(e.target === taskModal) {
      if(taskModal) {
        taskModal.style.display = 'none';
      }
    }
  });

  const handleAddTask = () => {
    const description = taskInput.value;

    if(description && description.trim() !== '') {
      taskManager.addTask(description.trim());
      taskInput.value = '';

      taskModal!.style.display = 'none';
    }  else {
      alert('Task 설명은 필수값 입니다., 내용을 입력해주세요')
    }
  }


  addTaskButton?.addEventListener('click', handleAddTask);

  taskInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      handleAddTask();
    }
  });
  }

  document.addEventListener('DOMContentLoaded', init);