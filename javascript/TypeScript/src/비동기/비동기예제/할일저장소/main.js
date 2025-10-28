// ! 사용자로부터 입력받은 할 일을 관리하는 Task Logger
// Task 저장소의 구조 - 클래스
// : 할 일에 대한 저장소(배열)와 기능(함수, 메서드) 명시 
var TaskLogger = /** @class */ (function () {
    function TaskLogger() {
        this.tasks = [];
        // 할 일의 ID 생성을 위한 카운터 
        this.taskIdCount = 0;
    }
    TaskLogger.prototype.addTask = function (description) {
        var newTask = {
            id: this.taskIdCount++,
            description: description,
            timestamp: new Date()
        };
        this.tasks.push(newTask);
        this.renderTasks(); // 할 일 목록을 화면에 재랜더링(다시 출력)
        return newTask;
    };
    TaskLogger.prototype.deleteTask = function (taskId) {
        // 현재의 tasks 배열을 순회하여 순회되는 요소의 id와 삭제하고자 하는 요소의 id(매개변수값)가 일치하지 않는 요소만 새로운 배열에 담아 tasks에 저장
        this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
        this.renderTasks();
    };
    TaskLogger.prototype.createTaskElement = function (task) {
        var taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = "\n      <span>".concat(task.description, " - ").concat(task.timestamp.toLocaleString(), "</span>\n      <button data-task-id=").concat(task.id, ">Delete</button>\n    ");
        return taskItem;
    };
    TaskLogger.prototype.renderTasks = function () {
        var _this = this;
        var taskList = document.getElementById('task-list');
        if (taskList) {
            taskList.innerHTML = '';
            this.tasks.forEach(function (task) {
                var taskItem = _this.createTaskElement(task);
                taskList.appendChild(taskItem);
            });
            this.addDeleteEnventListeners();
        }
    };
    TaskLogger.prototype.addDeleteEnventListeners = function () {
        var _this = this;
        var deleteButtons = document.querySelectorAll('.task-item-button');
        deleteButtons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                var taskId = parseInt(e.target.dataset.taskId || '0', 10);
                _this.deleteTask(taskId);
            });
        });
    };
    return TaskLogger;
}());
// ! 프로젝트 실행의 진입점
var init = function () {
    //? TaskManger 인스턴스 생성
    var taskManager = new TaskLogger();
    var logTaskButton = document.getElementById('log-task-button');
    var taskModal = document.getElementById('task-modal');
    var closeModalButton = document.querySelector('.close');
    var addTaskButton = document.getElementById('add-task-button');
    var taskInput = document.getElementById('task-input');
    if (logTaskButton) {
        logTaskButton.addEventListener('click', function () {
            if (taskModal) {
                taskModal.style.display = 'block';
                taskInput.focus();
            }
        });
    }
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            if (taskModal) {
                taskModal.style.display = 'none';
            }
        });
    }
    window.addEventListener('click', function (e) {
        if (e.target === taskModal) {
            if (taskModal) {
                taskModal.style.display = 'none';
            }
        }
    });
    var handleAddTask = function () {
        var description = taskInput.value;
        if (description && description.trim() !== '') {
            taskManager.addTask(description.trim());
            taskInput.value = '';
            taskModal.style.display = 'none';
        }
        else {
            alert('Task 설명은 필수값 입니다., 내용을 입력해주세요');
        }
    };
    addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
};
document.addEventListener('DOMContentLoaded', init);
