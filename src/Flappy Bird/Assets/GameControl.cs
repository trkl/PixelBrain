using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameControl : MonoBehaviour
{
    public static GameControl Instance;

    public float scrollSpeed = -1.5f;
    public bool isGameOver = false;
    private int score = 0;

    public Text scoreText;
    public GameObject gameOverText;

    // Start is called before the first frame update
    void Awake()
    {
        if(Instance == null)
        {
            Instance = this;
        } else if (Instance != this)
        {
            Destroy(gameObject);
        } 
    }

    // Update is called once per frame
    void Update()
    {
        if(isGameOver && Input.GetMouseButtonDown(0))
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }

    public void Score()
    {
        if(isGameOver) { return; }

        score++;
        scoreText.text = "Score: " + score;
    }

    public void Die()
    {
        isGameOver = true;
        gameOverText.SetActive(true);
    }
}
