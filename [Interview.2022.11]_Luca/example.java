package com.oo.chat;

public class User {

    private Long userId;
    private String nickname;

    public User(Long userId, String nickname) {
        this.userId = userId;
        this.nickname = nickname;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Long getUserId() {
        return userId;
    }

    public String getNickname() {
        return nickname;
    }

    public boolean equals(Object objectToCompare) {
        if (!(objectToCompare instanceof User)) {
            return false;
        }
        User incoming = (User) objectToCompare;
        if (incoming.getNickname() != null && incoming.getUserId() != null) {
            if (incoming.getNickname().equalsIgnoreCase(this.nickname)
                    && incoming.getUserId().equals(this.userId))
                return true;
        }
        return false;
    }
}


package com.oo.chat;

public interface Message {

    public String getValue();

    public void setValue(String value);

}

package com.oo.chat;

public class SimpleMessage implements Message {

    private String value;

    public SimpleMessage() {

    }

    public SimpleMessage(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

package com.oo.chat;

public interface ChatListener {

    public void notify(Message newMessage);

}

package com.oo.chat;

import java.util.ArrayList;
import java.util.List;

public class ChatWindow implements ChatListener {

    private User user;
    private List<Message> messageList;
    private Long id;

    public User getUser() {
        return user;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }

    public void addMessageToList(Message newMessage) {
        if (this.messageList == null) {
            this.messageList = new ArrayList<Message>();
        }
        this.messageList.add(newMessage);
    }

    public void notify(Message newMessage) {
        addMessageToList(newMessage);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

package com.oo.chat;

import java.util.ArrayList;
import java.util.List;

public class ChatSession {

    private List<ChatListener> registeredChatListeners;

    public void register(ChatWindow chatWindow) {
        if (registeredChatListeners == null)
            registeredChatListeners = new ArrayList<ChatListener>();
        registeredChatListeners.add(chatWindow);
    }

    public List<ChatListener> getRegisteredChatListeners() {
        return registeredChatListeners;
    }

    public void setRegisteredChatWindows(
            List<ChatListener> registeredChatListeners) {
        this.registeredChatListeners = registeredChatListeners;
    }

    public void incomingMessage(Long chatListenerId, Message message) {
        publish(message);
    }

    protected void publish(Message messageToPublish) {
        if (registeredChatListeners != null) {
            for (ChatListener eachListener : registeredChatListeners) {
                eachListener.notify(messageToPublish);
            }
        }
    }
}

The basic design looks sound to me. Obviously to complete this, you would nee to add a lot more features. The current design keeps all messages in memory indefinitely, but at some point you are going to need code for purging old messages.

The few significant design issues that I do see are:

The message interface doesn't link back the the sender of the message - Most chats show who said what, and this will be difficult without a User field in the message.
The message interface doesn't have a time property. This will make purging old messages more difficult.