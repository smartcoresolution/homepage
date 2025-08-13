# SmartCore Solution - 헬스케어 & 스마트제조 SaaS

AI 음성인식 기반 헬스케어 및 스마트제조 SaaS 솔루션을 제공하는 스마트코어솔루션의 공식 웹사이트입니다.

## 🚀 프로젝트 개요

스마트코어솔루션(주)는 첨단 음성인식과 인공지능(AI) 분석을 기반으로, 헬스케어와 스마트제조 전반에 걸친 혁신적인 SaaS 솔루션을 제공합니다.

### 핵심 역량
- AI 기반 음성·언어 분석
- 의료·제조 용어 인식
- 클라우드 SaaS 아키텍처
- HIPAA / GDPR 대응

## 🏥 헬스케어 서비스

### 1. 정신 건강·인지 기능 진단
- 발화 속도·억양·어휘·침묵 패턴을 AI로 분석
- 치매, 우울증 등 조기 징후 탐지·예측
- 병원, 요양원, 재활센터 등 다양한 환경에서 활용

### 2. 의료 기록 자동화 (EMR)
- 진료 내용을 음성으로 입력하면 의료 전문 용어를 정확히 인식
- EMR에 자동 저장하여 의사의 업무 부담 감소
- 오류 가능성 최소화

### 3. 재활 치료·의료 통역
- 언어 재활(발음 교정, 진행 분석) 지원
- 다국적 환자를 위한 실시간 의료 통역
- 원격 화상 진료, 국제 의료 봉사 환경에서 활용

## 🏭 스마트제조 솔루션

- IoT·AI·MES로 생산 현황, 품질 데이터, 설비·안전 상태를 실시간 모니터링
- 생산성 향상, 품질관리 자동화, 실시간 모니터링, 안전관리 강화 지원

## 🛠️ 기술 스택

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- PWA (Progressive Web App) 지원

### Backend & Database
- Firebase Firestore (실시간 데이터베이스)
- Firebase Authentication (사용자 인증)
- Local Storage (클라이언트 사이드 캐싱)

### 주요 라이브러리
- Firebase SDK v10.7.1

## 📁 프로젝트 구조

```
homepage_test/
├── index.html                 # 메인 페이지
├── admin-announcements.html   # 공지사항 관리 페이지
├── announcement-form.html     # 공지사항 등록 폼
├── healthcare.html            # 헬스케어 서비스 소개
├── healthcare-diagnosis.html  # 정신 건강 진단 서비스
├── healthcare-emr.html        # 의료 기록 자동화 서비스
├── healthcare-rehab.html      # 재활 치료 서비스
├── manufacturing.html         # 스마트제조 솔루션
├── smart-manufacturing.html   # 스마트제조 상세 페이지
├── contact.html              # 문의 페이지
├── inquiry-status.html       # 문의 상태 확인
├── mail-send.html           # 메일 발송 페이지
├── thank_you.html           # 감사 페이지
├── styles.css                # 메인 스타일시트
├── smart-manufacturing.css   # 스마트제조 전용 스타일
├── admin-styles.css          # 관리자 페이지 스타일
├── app.js                    # 메인 JavaScript 파일
├── admin.js                  # 관리자 페이지 JavaScript
├── manifest.webmanifest      # PWA 매니페스트
├── service-worker.js         # 서비스 워커
├── create_service_icons.py   # 서비스 아이콘 생성 스크립트
├── assets/                   # 이미지 및 아이콘
│   ├── icons/
│   ├── images/
│   └── *.png, *.webp 파일들
└── icons/                    # PWA 아이콘
    ├── icon-192.png
    ├── icon-512.png
    └── maskable 아이콘들
```

## 🔐 공지사항 관리 시스템

### 기능
- **공지사항 등록**: 제목, 내용, 우선순위, 날짜, 태그, 첨부파일
- **공지사항 관리**: 목록 조회, 수정, 삭제
- **실시간 데이터베이스**: Firebase Firestore 연동
- **관리자 인증**: 세션 기반 인증 시스템

### 관리자 계정
- **ID**: `admin`
- **Password**: `admin123`

### 데이터 구조
```javascript
{
  title: "공지사항 제목",
  content: "공지사항 내용",
  priority: "normal|high|urgent",
  date: "2025-01-20",
  tags: ["태그1", "태그2"],
  createdAt: "서버 타임스탬프",
  updatedAt: "서버 타임스탬프"
}
```

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone [repository-url]
cd homepage_test
```

### 2. Firebase 설정
1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Firestore Database 생성 (테스트 모드)
3. 웹 앱 등록 및 설정 정보 복사
4. `admin-announcements.html`의 Firebase 설정 업데이트

### 3. 로컬 서버 실행
```bash
# Live Server (VS Code 확장)
# 또는 Python 내장 서버
python -m http.server 8000

# 또는 Node.js http-server
npx http-server
```

### 4. 브라우저에서 접속
```
http://localhost:8000
```

## 🔧 Firebase 설정

### 1. 프로젝트 생성
- Firebase Console에서 새 프로젝트 생성
- 프로젝트 이름: `smartcore-announcements`

### 2. 웹 앱 등록
- 웹 앱 추가: `smartcore-web`
- Firebase SDK 설정 코드 복사

### 3. Firestore Database 설정
- Firestore Database 생성
- 보안 규칙 설정 (테스트 모드)
- 위치: `asia-northeast3 (서울)` 권장

### 4. 보안 규칙 (테스트용)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 5. Firebase 설정 코드 예시
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 📱 PWA 기능

- **오프라인 지원**: 서비스 워커를 통한 캐싱
- **앱 설치**: Chrome/Edge/Android에서 홈 화면에 추가 가능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **매니페스트**: 앱 아이콘, 테마 색상, 표시 모드 설정

## 🌐 배포

### GitHub Pages
1. 저장소를 GitHub에 푸시
2. Settings → Pages → Source를 `main` 브랜치로 설정
3. 자동 배포 완료

### Firebase Hosting (선택사항)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🔒 보안 고려사항

### 현재 상태 (개발용)
- Firebase 보안 규칙이 모든 접근을 허용
- 관리자 인증이 클라이언트 사이드에서만 처리
- 세션 기반 인증 (sessionStorage 사용)

### 운영 환경 권장사항
- Firebase 보안 규칙 강화
- 서버 사이드 인증 구현
- HTTPS 강제 적용
- API 키 보안 관리
- JWT 토큰 기반 인증

## 📞 지원 및 문의

- **회사**: 스마트코어솔루션(주)
- **웹사이트**: [공식 웹사이트](https://www.smartcoresolution.com)
- **문의**: `/contact.html` 페이지를 통한 문의
- **문의 상태 확인**: `/inquiry-status.html`

## 📄 라이선스

© 2025 SmartCoreSolution, Inc. All rights reserved.

## 🔄 업데이트 로그

### v1.0.0 (2025-01-20)
- 초기 웹사이트 구축
- 헬스케어 서비스 소개 페이지
- 스마트제조 솔루션 소개
- 공지사항 관리 시스템 (Firebase 연동)
- PWA 지원 추가
- 반응형 디자인 구현
- 관리자 인증 시스템 구축

## 🐛 알려진 이슈

### Firebase 권한 오류
- **오류**: "Missing or insufficient permissions"
- **해결방법**: Firebase Console에서 Firestore 보안 규칙을 테스트 모드로 설정

### JavaScript 오류
- **오류**: "Cannot read properties of undefined (reading 'target')"
- **해결방법**: showTab 함수에서 event 객체 안전 처리

## 🚧 개발 중인 기능

- [ ] 파일 업로드 기능 완성
- [ ] 사용자 권한 관리 시스템
- [ ] 실시간 알림 시스템
- [ ] 다국어 지원
- [ ] SEO 최적화

---

**SmartCore Solution** - AI 기반 혁신적인 SaaS 솔루션으로 더 나은 미래를 만들어갑니다.
