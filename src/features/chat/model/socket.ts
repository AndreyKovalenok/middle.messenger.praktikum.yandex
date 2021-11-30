type TChatSocketPayload = {
  userId: string;
  chatId: string;
  token: string;
};

export const createSocket = ({ chatId, token, userId }: TChatSocketPayload) => {
  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
  );

  socket.addEventListener("open", () => {
    console.log("Соединение установлено");

    socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  });

  socket.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener("error", (event) => {
    //@ts-ignore
    console.log("Ошибка", event.message);
  });

  return socket;
};
