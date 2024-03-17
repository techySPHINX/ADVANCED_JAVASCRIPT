

public class MultithreadedBinarySearch {

    private static int[] numbers = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    private static int target = 13;

    public static void main(String[] args) {
        int start = 0;
        int end = numbers.length - 1;

        Thread leftThread = new Thread(() -> {
            int result = binarySearch(numbers, start, (start + end) / 2, target);
            if (result != -1) {
                System.out.println("Found at index: " + result + " (left thread)");
            }
        });

        Thread rightThread = new Thread(() -> {
            int result = binarySearch(numbers, (start + end) / 2 + 1, end, target);
            if (result != -1) {
                System.out.println("Found at index: " + result + " (right thread)");
            }
        });

        leftThread.start();
        rightThread.start();

        try {
            leftThread.join();
            rightThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        if (leftThread.isAlive() && rightThread.isAlive()) {
            System.out.println("Target element not found");
        }
    }

    private static int binarySearch(int[] arr, int start, int end, int target) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
}
