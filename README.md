이 프로젝트는 [Next.js](https://nextjs.org/) 입니다.

## 프로그램 설명
매장에서 포인트 적립하는 서비스를 next.js 와 firebase로 구현. 

## 아쉬운점
5월에 했던 기획 및 의도는 테블릿 앱의 웹뷰에 이 서비스를 넣어 매장에서 쓰게끔 하고 싶었다. 따라서
- 앱(웹뷰) 구현을 못한점
- next.js 배포에 대한 설계를 못한점

## 주요 라이브러리 버전
- Next.js 13
- Firebase 10.0

## 시작하기

firebase 설정
- [firebase 프로젝트 추가하기](https://firebase.google.com/?hl=ko)
- firebase console 접속
- 웹 앱 추가 -> firebaseConfig 객체 내용 복사 후, .env에 작성하기
- realtime database 생성 후, .env에 작성('NEXT_PUBLIC_FIREBASE_DATABASE_URL')하기

.env 작성하기
```bash
.env 파일 내용

# 파이어베이스 설정
NEXT_PUBLIC_FIREBASE_API_KEY={apiKey}
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN={authDomain}
NEXT_PUBLIC_FIREBASE_DATABASE_URL={realtimeDatabase}
NEXT_PUBLIC_FIREBASE_PROJECT_ID={projectId}
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET={storageBucket}
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID={messagingSenderId}
NEXT_PUBLIC_FIREBASE_APP_ID={appId}
```

npm install
```bash
npm install
```

실행하기
```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000)