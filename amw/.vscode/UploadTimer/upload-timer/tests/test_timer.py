import unittest
from src.timer import estimate_download_time, format_time, simulate_download

class TestDownloadEstimator(unittest.TestCase):

    def test_estimate_download_time(self):
        self.assertEqual(estimate_download_time(100, 0, 0), "Calculating...")
        self.assertEqual(estimate_download_time(100, 50, 1), "0s")
        self.assertEqual(estimate_download_time(100, 50, 2), "0s")

    def test_format_time(self):
        self.assertEqual(format_time(0), "0s")
        self.assertEqual(format_time(61), "1m 1s")
        self.assertEqual(format_time(3661), "1h 1m 1s")

    def test_simulate_download(self):
        # This test will not assert anything as simulate_download prints output
        # You can run this function to see if it behaves as expected
        simulate_download(10)  # Simulate a small download for testing

if __name__ == '__main__':
    unittest.main()