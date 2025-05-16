#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

class DoubleLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoubleLinkedList() {
        head = nullptr;
        tail = nullptr;
    }

    void insertFirst(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        newNode->prev = nullptr;
        newNode->next = head;
        if (head != nullptr) {
            head->prev = newNode;
        }
        head = newNode;
        if (tail == nullptr) {
            tail = newNode;
        }
    }

    void insertLast(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        newNode->next = nullptr;
        newNode->prev = tail;
        if (tail != nullptr) {
            tail->next = newNode;
        }
        tail = newNode;
        if (head == nullptr) {
            head = newNode;
        }
    }

    void deleteFirst() {
        if (head == nullptr) {
            cout << "List kosong, tidak ada yang dihapus." << endl;
            return;
        }
        Node* temp = head;
        head = head->next;
        if (head != nullptr) {
            head->prev = nullptr;
        } else {
            tail = nullptr;
        }
        delete temp;
    }

    void deleteLast() {
        if (tail == nullptr) {
            cout << "List kosong, tidak ada yang dihapus." << endl;
            return;
        }
        Node* temp = tail;
        tail = tail->prev;
        if (tail != nullptr) {
            tail->next = nullptr;
        } else {
            head = nullptr;
        }
        delete temp;
    }

    void displayForward() {
        Node* current = head;
        cout << "Isi list dari awal ke akhir: ";
        while (current != nullptr) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }

    void displayBackward() {
        Node* current = tail;
        cout << "Isi list dari akhir ke awal: ";
        while (current != nullptr) {
            cout << current->data << " ";
            current = current->prev;
        }
        cout << endl;
    }
};

int main() {
    DoubleLinkedList dll;
    dll.insertFirst(10);
    dll.insertFirst(20);
    dll.insertLast(5);
    dll.insertLast(1);

    dll.displayForward();    // Output: 20 10 5 1
    dll.displayBackward();   // Output: 1 5 10 20

    dll.deleteFirst();
    dll.displayForward();    // Output: 10 5 1

    dll.deleteLast();
    dll.displayForward();    // Output: 10 5

    return 0;
}