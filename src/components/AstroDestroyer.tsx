import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 350;
const CANVAS_HEIGHT = 550;
const SHIP_SIZE = 70;
const ASTEROID_SIZE = 40;
const BULLET_HEIGHT = 25;
const BULLET_WIDTH = 2;
const BULLET_SPEED = 6;
const ASTEROID_SPEED = 2;

const AstroDestroyer = () => {
    const [gameStatus, setGameStatus] = useState<"playing" | "gameover" | null>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(5);
    const [shipPosition, setShipPosition] = useState({ x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - SHIP_SIZE });
    const [bullets, setBullets] = useState<{ x: number; y: number }[]>([]);
    const [asteroids, setAsteroids] = useState<{ x: number; y: number }[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const shipRef = useRef<any>(shipPosition);
    const pressedKeys = useRef<Set<string>>(new Set());

    useEffect(() => {
        shipRef.current = shipPosition;
    }, [shipPosition]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === " ") {
                e.preventDefault();
            }
            pressedKeys.current.add(e.key);
        }
        function handleKeyUp(e: KeyboardEvent) {
            if (e.key === " ") {
                e.preventDefault();
            }
            pressedKeys.current.delete(e.key);
        }
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useEffect(() => {
        let shootCooldown = 0;
        function gameLoop() {

            // spaceship movement
            if (pressedKeys.current.has("ArrowLeft")) {
                setShipPosition((p) => ({ ...p, x: Math.max(0, p.x - 4) }));
            }
            if (pressedKeys.current.has("ArrowRight")) {
                setShipPosition((p) => ({ ...p, x: Math.min(CANVAS_WIDTH - SHIP_SIZE, p.x + 4) }));
            }
            // creating bullets when space is pressed
            if (pressedKeys.current.has(" ")) {
                if (shootCooldown <= 0) {
                    setBullets((b) => [
                        ...b,
                        { x: shipRef.current.x + SHIP_SIZE / 2 - BULLET_WIDTH / 2, y: shipRef.current.y }
                    ]);
                    shootCooldown = 50;
                }
            }
            if (shootCooldown > 0) shootCooldown--;
            requestAnimationFrame(gameLoop);
        }
        if (gameStatus === "playing")
            gameLoop();
    }, [gameStatus]);

    // moving bullets
    useEffect(() => {
        const interval = setInterval(() => {
            if (gameStatus !== "playing") return;
            setBullets((b) => b
                .map((bullet) => ({ x: bullet.x, y: bullet.y - BULLET_SPEED }))
                .filter((bullet) => bullet.y + BULLET_HEIGHT > 0)
            );
        }, 15);
        return () => clearInterval(interval);
    }, [gameStatus]);

    // creating and moving asteroids
    useEffect(() => {
        const interval = setInterval(() => {
            if (gameStatus !== "playing") return;
            setAsteroids((a) => [
                ...a,
                { x: Math.random() * (CANVAS_WIDTH - ASTEROID_SIZE), y: 0 }
            ]);
        }, 1000);

        const moveInterval = setInterval(() => {
            setAsteroids((a) => a
                .map((asteroid) => ({ x: asteroid.x, y: asteroid.y + ASTEROID_SPEED }))
                .filter((asteroid) => {
                    setLives((l) => asteroid.y + ASTEROID_SIZE >= CANVAS_HEIGHT ? l - 1 : l);
                    return asteroid.y < CANVAS_HEIGHT - ASTEROID_SIZE
                })
            );
        }, 30);

        return () => {
            clearInterval(interval);
            clearInterval(moveInterval);
        };
    }, [gameStatus]);


    // collision detection
    useEffect(() => {
        const newAsteroids = asteroids.filter((asteroid) => {
            const hit = bullets.find((bullet) => {
                return !(
                    bullet.x > asteroid.x + ASTEROID_SIZE ||
                    bullet.x + BULLET_WIDTH < asteroid.x ||
                    bullet.y > asteroid.y + ASTEROID_SIZE ||
                    bullet.y + BULLET_HEIGHT < asteroid.y
                );
            });
            if (hit) {
                setScore((s) => s + 10); // Increment score on hit
                setBullets((b) => b.filter((bullet) => bullet !== hit));
                return false;
            }
            return true;
        });
        if (newAsteroids.length !== asteroids.length) {
            setAsteroids(newAsteroids);
        }
    }, [asteroids, bullets]);

    useEffect(() => {
        if (lives <= 0 && gameStatus === "playing") {
            setAsteroids([]);
            setBullets([]);
            setGameStatus("gameover");
        }
    }, [lives, gameStatus]);

    return (
        <div className="flex flex-col items-center rounded-lg border backdrop-blur-md border-white/10 bg-gray-900/10 text-tBase">
            <div className="mb-6 text-sm font-normal flex justify-between w-full pt-2 px-4">
                <div>
                    Score: {score}
                </div>
                <div>
                    {Array.from({ length: lives }).map(() => ("❤️"))}
                </div>
            </div>
            <div className="bg-secondary w-full relative" style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>
                {asteroids.map((asteroid, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full shadow-lg"
                        style={{
                            height: ASTEROID_SIZE,
                            width: ASTEROID_SIZE,
                            left: asteroid.x,
                            top: asteroid.y,
                            backgroundImage: 'url(/meteor.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#6B7280', // fallback color
                        }}
                    />
                ))}
                {bullets.map((bullet, index) => (
                    <div key={index} className="bg-red-500 absolute" style={{ height: BULLET_HEIGHT, width: BULLET_WIDTH, left: bullet.x, top: bullet.y }} />
                ))}
                <img src="/rocket.gif" alt="Spaceship" className="object-cover absolute" style={{ height: SHIP_SIZE, width: SHIP_SIZE, left: shipPosition.x- SHIP_SIZE, top: shipPosition.y }} />
                {(gameStatus !== "playing") && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  bg-gray-900/20 text-white">
                        <div className="text-3xl font-bold mb-4">
                            {gameStatus === "gameover" ? "Game Over" : "Astro Destroyer"}
                        </div>
                        {gameStatus === "gameover" && (
                            <div className="mb-2 text-lg">Final Score: {score}</div>
                        )}
                        <button
                            className="px-6 py-2 bg-accent-cyan text-black font-semibold rounded shadow hover:bg-accent-cyan/80 transition"
                            onClick={() => {
                                setScore(0);
                                setLives(5);
                                setShipPosition({ x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - SHIP_SIZE });
                                setBullets([]);
                                setAsteroids([]);
                                setGameStatus("playing");
                            }}
                        >
                            {gameStatus === "gameover" ? "Restart" : "Start Game"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AstroDestroyer
