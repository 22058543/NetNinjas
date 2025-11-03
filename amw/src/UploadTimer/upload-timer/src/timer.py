def estimate_download_time(file_size, downloaded_size, start_time):
    elapsed_time = time.time() - start_time
    if downloaded_size == 0:
        return "Calculating..."
    
    download_speed = downloaded_size / elapsed_time  # bytes per second
    remaining_size = file_size - downloaded_size
    estimated_time = remaining_size / download_speed if download_speed > 0 else 0
    
    return format_time(estimated_time)

def format_time(seconds):
    minutes, seconds = divmod(int(seconds), 60)
    hours, minutes = divmod(minutes, 60)
    
    if hours > 0:
        return f"{hours}h {minutes}m {seconds}s"
    elif minutes > 0:
        return f"{minutes}m {seconds}s"
    else:
        return f"{seconds}s"

def simulate_download(total_size, chunk_size=1024*1024):  # 1MB chunks
    downloaded = 0
    start_time = time.time()
    
    while downloaded < total_size:
        downloaded += chunk_size
        if downloaded > total_size:
            downloaded = total_size
            
        progress = (downloaded / total_size) * 100
        eta = estimate_download_time(total_size, downloaded, start_time)
        
        sys.stdout.write(f"\rProgress: {progress:.1f}% - ETA: {eta}")
        sys.stdout.flush()
        
        time.sleep(0.1)  # Simulate download speed
    
    print("\nDownload completed!")