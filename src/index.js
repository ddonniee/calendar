/* 코드를 작성해 보세요. */
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css'
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker';

const calendar = new Calendar('#calendar', {
    defaultView: 'month',
    useCreationPopup: true,
    useDetailPopup: true,
    // taskView 속성은 마일스톤/업무 보기를 설정ㅎ하여 일간, 주간 보기에서만 지원되는 기능으로 기본값을 false로 해두자.
    taskView: false,
    scheduleView: false,
    month: {
        workweek: true
    },
    week: {
        workweek: true
    }
})




/* ---------------------------------------------- */
/* 이동 및 뷰 타입 변경 버튼 이벤트 핸들러 */

// 이전, 다음, 일간, 주간, 월간 버튼 관리
// 상세페이지 연결은 해당 일자 클릭했을 때

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dayViewBtn = document.getElementById('dayViewBtn');
const weekViewBtn = document.getElementById('weekViewBtn');
const monthViewBtn = document.getElementById('monthViewBtn');

prevBtn.addEventListener('click', () => {

});

nextBtn.addEventListener('click', () => {

});

dayViewBtn.addEventListener('click', () => {

});

weekViewBtn.addEventListener('click', () => {

});

monthViewBtn.addEventListener('click', () => {

});

calendar.render();