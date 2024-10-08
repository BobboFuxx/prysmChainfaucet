
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 8088, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Prysm Network",
        logo: "/logo.jpg",
        deployer: `<a href="#">Light Labs</a>`
    },
    blockchains: [
        {
            name: "prysm-devnet-1",
            endpoint: {
                // make sure that CORS is enabled in rpc section in config.toml
                // cors_allowed_origins = ["*"]
                rpc_endpoint: "https://prysm-rpc-devnet.kleomedes.network",
            },
            sender: {
                mnemonic: "isolate ticket alpha private soda faculty runway across detail suspect industry over",
                option: {
                    hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
                    prefix: "prysm"
                }
            },
            tx: {
                amount: {
                    denom: "uprysm",
                    amount: "20000000000000000000"
                },
                fee: {
                    amount: [
                        {
                            amount: "5000",
                            denom: "uprysm"
                        }
                    ],
                    gas: "200000"
                },
            },
            limit: {
                // how many times each wallet address is allowed in a window(24h)
                address: 1, 
                // how many times each ip is allowed in a window(24h),
                // if you use proxy, double check if the req.ip is return client's ip.
                ip: 10 
            }
        },

    ]    
}
